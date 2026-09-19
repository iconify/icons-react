import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlbbs8bwr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlbbs8bwr"/>`,
		"fallback": "ant-design:medicine-box-filled",
	});
}

export default Component;
