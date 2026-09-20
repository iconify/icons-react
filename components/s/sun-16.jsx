import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knw8v0bgi.css';
import '../../css/f/fr9co-jbx.css';
import '../../css/c/c3eibnbrh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knw8v0bgi"/><path clip-rule="evenodd" class="fr9co-jbx"/><path class="c3eibnbrh"/>`,
		"fallback": "qlementine-icons:sun-16",
	});
}

export default Component;
