import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g86q6cbgz.css';
import '../../css/s/sygzb3b8y.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g86q6cbgz"/><path class="sygzb3b8y"/>`,
		"fallback": "ant-design:safety",
	});
}

export default Component;
