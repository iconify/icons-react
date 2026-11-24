import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqd7f1bqb.css';
import '../../css/e/eatsjcb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqd7f1bqb"/><path class="eatsjcb_b"/>`,
		"fallback": "lucide-extended:star-check-filled",
	});
}

export default Component;
