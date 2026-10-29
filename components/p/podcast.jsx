import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mubbevbow.css';
import '../../css/d/drx3k1b3n.css';
import '../../css/k/ku83o5bzm.css';
import '../../css/r/rfkvuygxg.css';
import '../../css/s/slqxj0p9g.css';
import '../../css/f/fguz4xb8c.css';
import '../../css/k/k-n149b1k.css';
import '../../css/s/s81lw7o8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mubbevbow wm-shadow"/><path class="drx3k1b3n wm-k"/><path class="ku83o5bzm wm-k"/><path class="rfkvuygxg wm-k"/><path class="slqxj0p9g wm-k"/><path class="fguz4xb8c wm-shine"/><path class="k-n149b1k wm-a"/><path class="s81lw7o8c wm-a"/>`,
		"fallback": "withicons-pastel:podcast",
	});
}

export default Component;
