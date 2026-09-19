import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4utkdd9g.css';
import '../../css/r/r9wf1hbpk.css';
import '../../css/s/sa3sebesr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4utkdd9g"/><path class="r9wf1hbpk"/><path class="sa3sebesr"/>`,
		"fallback": "ant-design:video-camera-add-outlined",
	});
}

export default Component;
