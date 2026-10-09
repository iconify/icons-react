import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahg6c7ovd.css';
import '../../css/v/vv79wccfl.css';
import '../../css/o/oh57i-o3j.css';
import '../../css/c/c4ymzv_2t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahg6c7ovd"/><path class="vv79wccfl"/><path class="oh57i-o3j"/><path class="c4ymzv_2t"/>`,
		"fallback": "energy-icons:languages-20",
	});
}

export default Component;
