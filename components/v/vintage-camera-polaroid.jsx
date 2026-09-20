import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9um0nbed.css';
import '../../css/y/ymv5f1b1u.css';
import '../../css/c/cihm6fs4y.css';
import '../../css/v/v64-wzbtw.css';
import '../../css/u/uoe-mx4gx.css';
import '../../css/i/i60cxpbqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9um0nbed"/><path class="ymv5f1b1u"/><path class="cihm6fs4y"/><path class="v64-wzbtw"/><path class="uoe-mx4gx"/><path class="i60cxpbqf"/>`,
		"fallback": "streamline-freehand:vintage-camera-polaroid",
	});
}

export default Component;
