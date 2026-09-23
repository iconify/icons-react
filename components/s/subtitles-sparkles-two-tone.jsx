import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x7iagwb-d.css';
import '../../css/l/lxr-c948j.css';
import '../../css/x/xsw1oxbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x7iagwb-d"/><path class="lxr-c948j"/><path class="xsw1oxbvi"/></g>`,
		"fallback": "keyline-icons:subtitles-sparkles-two-tone",
	});
}

export default Component;
