import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/ca7yuu_zw.css';
import '../../css/z/z3jh6zbkz.css';
import '../../css/e/e3f4k026v.css';
import '../../css/s/s16_3qbus.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYenE4cOP"><g class="ufeehvblu"><path class="ca7yuu_zw"/><path class="z3jh6zbkz"/><path class="e3f4k026v"/><path class="s16_3qbus"/></g></mask></defs><path mask="url(#SVGYenE4cOP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:leaves-one",
	});
}

export default Component;
