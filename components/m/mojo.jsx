import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvbimsl5a.css';
import '../../css/p/pk3csccbi.css';
import '../../css/r/ru0jvrb6y.css';
import '../../css/b/bv63s8ozg.css';
import '../../css/h/hzx_h6b0t.css';

const viewBox = {"width":19.5,"height":26,"left":61.5,"top":2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvbimsl5a"/><path class="pk3csccbi"/><path class="ru0jvrb6y"/><path class="bv63s8ozg"/><path class="hzx_h6b0t"/>`,
		"fallback": "thesvg-color:mojo",
	});
}

export default Component;
