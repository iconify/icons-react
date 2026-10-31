import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sny_5xbwt.css';
import '../../css/v/vfc-bbbmi.css';
import '../../css/f/flpd0t45k.css';
import '../../css/s/sn3nb_u0r.css';
import '../../css/r/rjj64pbka.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sny_5xbwt"/><path class="vfc-bbbmi"/><path class="flpd0t45k"/><path class="sn3nb_u0r"/><path class="rjj64pbka"/>`,
		"fallback": "tabler-flags:saint-kitts-and-nevis",
	});
}

export default Component;
