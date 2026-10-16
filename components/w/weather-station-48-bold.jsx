import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fixnhbu5f.css';
import '../../css/f/fnpggwb5s.css';
import '../../css/f/f7wkctbah.css';
import '../../css/y/y9zsbtbwi.css';
import '../../css/p/phox42bnd.css';
import '../../css/s/see0y-btr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fixnhbu5f"/><path class="fnpggwb5s"/><path class="f7wkctbah"/><path class="y9zsbtbwi"/><path class="phox42bnd"/><path class="see0y-btr"/>`,
		"fallback": "energy-icons:weather-station-48-bold",
	});
}

export default Component;
