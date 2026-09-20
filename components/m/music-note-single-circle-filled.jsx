import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/m/md6-m57lx.css';
import '../../css/x/xme927bga.css';
import '../../css/o/o7p8-3s9e.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGXTFeRdVy"><path class="k5-vjlrin"/><g class="ivjvz2eii"><path clip-rule="evenodd" class="md6-m57lx"/><path class="xme927bga"/><path clip-rule="evenodd" class="o7p8-3s9e"/></g></mask></defs><circle mask="url(#SVGXTFeRdVy)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:music-note-single-circle-filled",
	});
}

export default Component;
