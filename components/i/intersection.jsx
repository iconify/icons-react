import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a8yau0s8m.css';
import '../../css/x/x9k21mbpj.css';
import '../../css/s/s_3ygitrk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="a8yau0s8m"/><path class="x9k21mbpj"/><rect class="s_3ygitrk"/></g>`,
		"fallback": "icon-park-solid:intersection",
	});
}

export default Component;
