import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjbugb6if.css';
import '../../css/b/bnu8qk5ih.css';
import '../../css/m/m9byb9ete.css';
import '../../css/m/mmx6ymgpo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjbugb6if"/><path class="bnu8qk5ih"/><path class="m9byb9ete"/><path class="mmx6ymgpo"/>`,
		"fallback": "openmoji:signal",
	});
}

export default Component;
