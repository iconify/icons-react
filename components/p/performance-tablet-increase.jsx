import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qi_-d2bph.css';
import '../../css/s/s1e-6sb-c.css';
import '../../css/q/q1pc88orf.css';
import '../../css/o/or77rjb5j.css';
import '../../css/f/fecxhccad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qi_-d2bph"/><path class="s1e-6sb-c"/><path class="q1pc88orf"/><path class="or77rjb5j"/><path class="fecxhccad"/></g>`,
		"fallback": "streamline-ultimate-color:performance-tablet-increase",
	});
}

export default Component;
