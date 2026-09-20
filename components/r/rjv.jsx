import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7-qibxg.css';
import '../../css/h/hnbhowbuh.css';
import '../../css/h/hcdg4pudd.css';
import '../../css/g/gqt_qvbtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az7-qibxg"/><path class="hnbhowbuh"/><path class="hcdg4pudd"/><path class="gqt_qvbtw"/>`,
		"fallback": "token:rjv",
	});
}

export default Component;
