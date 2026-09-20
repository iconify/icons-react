import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/v/vzsu4h14j.css';
import '../../css/e/ei9xrvbel.css';
import '../../css/v/veo5qbydg.css';
import '../../css/y/ymms2xf1p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="vzsu4h14j"/><path class="ei9xrvbel"/><path class="veo5qbydg"/><path class="ymms2xf1p"/></g>`,
		"fallback": "streamline-kameleon-color:movie-file-3",
	});
}

export default Component;
