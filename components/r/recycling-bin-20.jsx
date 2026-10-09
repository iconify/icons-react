import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdqwsub7z.css';
import '../../css/s/sm2cie-7l.css';
import '../../css/y/ywoaiko1i.css';
import '../../css/n/n0gk87bfr.css';
import '../../css/a/a-v5b_b7m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdqwsub7z"/><path class="sm2cie-7l"/><path class="ywoaiko1i"/><path class="n0gk87bfr"/><path class="a-v5b_b7m"/>`,
		"fallback": "energy-icons:recycling-bin-20",
	});
}

export default Component;
