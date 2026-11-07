import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em3p83bvs.css';
import '../../css/a/a7uahqbqs.css';
import '../../css/b/bqzidgs3h.css';
import '../../css/n/nrkqveb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em3p83bvs"/><path clip-rule="evenodd" class="a7uahqbqs"/><path class="bqzidgs3h"/><path class="nrkqveb2f"/>`,
		"fallback": "solar:jar-of-pills-bold",
	});
}

export default Component;
