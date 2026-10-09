import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3lgxlbxk.css';
import '../../css/s/shu9gmbgv.css';
import '../../css/n/nbpoujbxo.css';
import '../../css/v/vsoe54eox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3lgxlbxk"/><path class="shu9gmbgv"/><path class="nbpoujbxo"/><path class="vsoe54eox"/>`,
		"fallback": "energy-icons:rooftop-wind-20-bold",
	});
}

export default Component;
