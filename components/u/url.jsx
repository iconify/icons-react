import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4n_m3bat.css';
import '../../css/w/wa7qyq31a.css';
import '../../css/q/qasg3hbws.css';

const viewBox = {"width":13,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a4n_m3bat"/><circle class="wa7qyq31a"/><path class="qasg3hbws"/>`,
		"fallback": "formkit:url",
	});
}

export default Component;
