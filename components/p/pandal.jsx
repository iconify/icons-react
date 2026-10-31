import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mfx7khbig.css';
import '../../css/y/yerhk-bxy.css';
import '../../css/s/snr9azloa.css';
import '../../css/c/ci-2pdbjk.css';
import '../../css/s/sv0dpobbw.css';
import '../../css/a/a8qfciduq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mfx7khbig"/><path class="yerhk-bxy"/><path class="snr9azloa wm-k"/><path class="ci-2pdbjk wm-a"/><path class="sv0dpobbw"/><path class="a8qfciduq"/></g>`,
		"fallback": "withicons-kawaii:pandal",
	});
}

export default Component;
