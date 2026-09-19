import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy9noxcnw.css';
import '../../css/o/o3c_lfbti.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy9noxcnw"/><path class="o3c_lfbti"/>`,
		"fallback": "gis:tag-o",
	});
}

export default Component;
