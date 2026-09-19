import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjxsglbxd.css';
import '../../css/b/bmmii1ffg.css';
import '../../css/i/izbfus17g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjxsglbxd"/><path class="bmmii1ffg"/><path class="izbfus17g"/>`,
		"fallback": "devicon:opencv",
	});
}

export default Component;
