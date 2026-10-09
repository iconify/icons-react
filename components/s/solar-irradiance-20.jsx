import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jitys6bhk.css';
import '../../css/d/duz8iobvw.css';
import '../../css/v/vbamuvwfj.css';
import '../../css/s/sa1gfwbrq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jitys6bhk"/><path class="duz8iobvw"/><path class="vbamuvwfj"/><path class="sa1gfwbrq"/>`,
		"fallback": "energy-icons:solar-irradiance-20",
	});
}

export default Component;
