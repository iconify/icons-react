import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-7hzubuy.css';
import '../../css/b/bza6db8oy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-7hzubuy"/><path class="bza6db8oy"/>`,
		"fallback": "roentgen:lattice-siren-left-siren-right",
	});
}

export default Component;
