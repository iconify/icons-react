import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/ef4d19eyw.css';
import '../../css/h/h8qfdnbff.css';
import '../../css/u/u2li8tusu.css';
import '../../css/b/bwwzctbgi.css';
import '../../css/r/r53fracuj.css';
import '../../css/m/meeo2ibna.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ef4d19eyw"/><path class="h8qfdnbff"/><path class="u2li8tusu"/><path class="bwwzctbgi"/><path class="r53fracuj"/><path class="meeo2ibna"/></g>`,
		"fallback": "icon-park:mind-mapping",
	});
}

export default Component;
