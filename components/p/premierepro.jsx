import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_om5egbx.css';
import '../../css/a/aucylab8w.css';
import '../../css/p/pimz7_f2j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_om5egbx"/><path class="aucylab8w"/><path class="pimz7_f2j"/>`,
		"fallback": "devicon:premierepro",
	});
}

export default Component;
