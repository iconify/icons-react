import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmp-gsbor.css';
import '../../css/b/boghcbc6a.css';
import '../../css/s/s2tvgacgn.css';
import '../../css/g/gjsv9w97d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qmp-gsbor"/><path class="boghcbc6a"/><path clip-rule="evenodd" class="s2tvgacgn"/><path class="gjsv9w97d"/></g>`,
		"fallback": "glyphs:microphone-outline",
	});
}

export default Component;
