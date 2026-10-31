import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exdrxybls.css';
import '../../css/u/uwtui1bbw.css';
import '../../css/y/ymhw3xb4s.css';
import '../../css/q/qp7g17b6o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exdrxybls"/><path class="uwtui1bbw"/><path class="ymhw3xb4s"/><path class="qp7g17b6o"/>`,
		"fallback": "iconito:quinoa",
	});
}

export default Component;
