import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9tq9hbvj.css';
import '../../css/k/kjn-z4brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9tq9hbvj"/><path class="kjn-z4brj"/>`,
		"fallback": "lucide-extended:star-plus-filled",
	});
}

export default Component;
