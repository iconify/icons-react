import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe-yorbct.css';
import '../../css/m/mvx-_1qfj.css';
import '../../css/r/rukxynu_f.css';
import '../../css/r/rfrmddcja.css';
import '../../css/t/ted6-nbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe-yorbct"/><path class="mvx-_1qfj"/><path class="rukxynu_f"/><path class="rfrmddcja"/><path class="ted6-nbfd"/>`,
		"fallback": "streamline-freehand:smiley-crying-rainbow",
	});
}

export default Component;
