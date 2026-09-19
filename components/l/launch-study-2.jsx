import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr18iotvw.css';
import '../../css/d/dxd4apb8s.css';
import '../../css/o/ol-mkhbiz.css';
import '../../css/r/r97skqbij.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="zr18iotvw"/><path class="dxd4apb8s"/><path class="ol-mkhbiz"/><path class="r97skqbij"/>`,
		"fallback": "carbon:launch-study-2",
	});
}

export default Component;
