import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/n/nmzg-hb6z.css';
import '../../css/h/hoglh3kgp.css';
import '../../css/m/mfmeo5b6o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="nmzg-hb6z"/><path class="hoglh3kgp"/><path class="mfmeo5b6o"/></g>`,
		"fallback": "streamline-kameleon-color:pokeball-pop",
	});
}

export default Component;
