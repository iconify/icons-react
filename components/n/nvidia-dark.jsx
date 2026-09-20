import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsg6o6iff.css';
import '../../css/r/rjaz92bbn.css';

const viewBox = {"width":351.46,"height":258.785,"left":35.188,"top":31.512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsg6o6iff"/><path class="rjaz92bbn"/>`,
		"fallback": "thesvg-color:nvidia-dark",
	});
}

export default Component;
