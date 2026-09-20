import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbp3s3hkl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbp3s3hkl"/>`,
		"fallback": "pinhead:stone-wall-with-battlement-and-sallyport",
	});
}

export default Component;
