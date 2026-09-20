import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c91a7wbvv.css';
import '../../css/g/gkzjl6blp.css';
import '../../css/f/f6n2v62fq.css';
import '../../css/p/pnf7jkbma.css';
import '../../css/p/p_vzd4dfr.css';
import '../../css/l/lasma-wha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c91a7wbvv"/><path class="gkzjl6blp"/><path class="f6n2v62fq"/><path class="pnf7jkbma"/><path class="p_vzd4dfr"/><path class="lasma-wha"/>`,
		"fallback": "selfhst:sonarr-anime-light",
	});
}

export default Component;
