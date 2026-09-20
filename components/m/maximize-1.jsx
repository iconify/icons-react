import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lj1rzhbka.css';
import '../../css/i/ii-ohqbro.css';
import '../../css/z/z9-feabeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="lj1rzhbka"/><path class="ii-ohqbro"/><path class="z9-feabeo"/></g>`,
		"fallback": "streamline-plump-color:maximize-1",
	});
}

export default Component;
