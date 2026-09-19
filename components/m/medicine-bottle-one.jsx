import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/m-fj4wzol.css';
import '../../css/b/buzi5ibmp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJYk3bc6W"><g class="v3_i3wktz"><path class="m-fj4wzol"/><path class="buzi5ibmp"/></g></mask></defs><path mask="url(#SVGJYk3bc6W)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:medicine-bottle-one",
	});
}

export default Component;
