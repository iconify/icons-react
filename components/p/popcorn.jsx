import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bqbi-tbcc.css';
import '../../css/i/icx7qgclj.css';
import '../../css/v/vyshbqbya.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeGfmIcYX"><g class="wwvp95byt"><path class="bqbi-tbcc"/><path class="icx7qgclj"/><path class="vyshbqbya"/></g></mask></defs><path mask="url(#SVGeGfmIcYX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:popcorn",
	});
}

export default Component;
