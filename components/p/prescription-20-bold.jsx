import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iccsyvk3j.css';
import '../../css/o/otxs-bbsk.css';
import '../../css/k/kbn91fbuc.css';
import '../../css/y/ymlf35b1k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iccsyvk3j"/><path class="otxs-bbsk"/><path class="kbn91fbuc"/><path class="ymlf35b1k"/>`,
		"fallback": "energy-icons:prescription-20-bold",
	});
}

export default Component;
