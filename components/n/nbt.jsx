import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn2e4nb2l.css';
import '../../css/t/tr3-hqbzp.css';
import '../../css/z/z9_diac_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gn2e4nb2l"/><path class="tr3-hqbzp"/><path class="z9_diac_i"/>`,
		"fallback": "token:nbt",
	});
}

export default Component;
