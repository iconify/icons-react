import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/s56h41bmy.css';
import '../../css/z/z2yyds8wy.css';
import '../../css/t/tcb54swnn.css';
import '../../css/a/ayqd9x4gh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="s56h41bmy"/><path class="z2yyds8wy"/><path class="tcb54swnn"/><path class="ayqd9x4gh"/></g>`,
		"fallback": "catppuccin:proto",
	});
}

export default Component;
