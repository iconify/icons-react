import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewn1ke3br.css';
import '../../css/n/nthzzhwxx.css';
import '../../css/p/pufh2ab9b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewn1ke3br"/><path class="nthzzhwxx"/><path class="pufh2ab9b"/>`,
		"fallback": "energy-icons:layout-20",
	});
}

export default Component;
