import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bywkocsmn.css';
import '../../css/t/tvvbqnhhg.css';
import '../../css/c/credxixyt.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bywkocsmn"/><circle class="tvvbqnhhg"/><path class="credxixyt"/>`,
		"fallback": "geo:turf-destination",
	});
}

export default Component;
