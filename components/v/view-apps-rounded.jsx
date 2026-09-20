import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ld7ecm2bn {
  fill: currentColor;
  d: path("M2.175 19.8q-.45.075-.812-.213T1 18.826V5.175q0-.475.363-.762t.812-.213l4 .65q.35.05.588.338T7 5.85v12.3q0 .375-.238.663t-.587.337zM10 19q-.425 0-.712-.288T9 18V6q0-.425.288-.712T10 5h4q.425 0 .713.288T15 6v12q0 .425-.288.713T14 19zm7.825.15q-.35-.05-.587-.337T17 18.15V5.85q0-.375.238-.662t.587-.338l4-.65q.45-.075.813.213t.362.762v13.65q0 .475-.363.763t-.812.212z");
}
</style><path class="ld7ecm2bn"/>`,
		"fallback": "material-symbols:view-apps-rounded",
	});
}

export default Component;
