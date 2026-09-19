import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2_1icpng.css';
import '../../css/x/xi4z0dojk.css';
import '../../css/h/hltazq3ru.css';
import '../../css/o/o_a2bsbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2_1icpng"/><path class="xi4z0dojk"/><path class="hltazq3ru"/><path class="o_a2bsbat"/>`,
		"fallback": "cil:vertical-align-bottom1",
	});
}

export default Component;
