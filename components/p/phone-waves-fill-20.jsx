import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw9a5abfk.css';
import '../../css/k/kqu7g8lpe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw9a5abfk"/><path class="kqu7g8lpe"/>`,
		"fallback": "garden:phone-waves-fill-20",
	});
}

export default Component;
