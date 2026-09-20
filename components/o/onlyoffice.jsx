import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvdaepbqt.css';
import '../../css/y/y1wes1v3b.css';
import '../../css/v/v9dfp9b-g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvdaepbqt"/><path class="y1wes1v3b"/><path class="v9dfp9b-g"/>`,
		"fallback": "selfhst:onlyoffice",
	});
}

export default Component;
