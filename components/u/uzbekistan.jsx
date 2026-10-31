import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgxr_vbkp.css';
import '../../css/s/sqek1dbgt.css';
import '../../css/z/zud_bnb5e.css';
import '../../css/y/yjgom1b6y.css';
import '../../css/h/hct9zqbco.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgxr_vbkp"/><path class="sqek1dbgt"/><path class="zud_bnb5e"/><path class="yjgom1b6y"/><path class="hct9zqbco"/>`,
		"fallback": "tabler-flags:uzbekistan",
	});
}

export default Component;
