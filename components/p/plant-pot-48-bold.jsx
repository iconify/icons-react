import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qexqz9xeo.css';
import '../../css/t/tah-fgebz.css';
import '../../css/s/sdxauxb2f.css';
import '../../css/k/k06btxh_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qexqz9xeo"/><path class="tah-fgebz"/><path class="sdxauxb2f"/><path class="k06btxh_g"/>`,
		"fallback": "energy-icons:plant-pot-48-bold",
	});
}

export default Component;
