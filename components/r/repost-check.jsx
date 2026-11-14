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
		"content": `<style>.r229p86oc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7a7 7 0 0 1 13 3.5m-2-2l2 2l2-2m-8.684 8.965q-.176.008-.352.007q-.177-.001-.353-.011t-.351-.028q-.176-.019-.35-.046q-.174-.028-.347-.064q-.172-.036-.343-.081q-.17-.045-.338-.098q-.169-.053-.334-.115t-.327-.132t-.32-.148t-.312-.164t-.303-.179q-.15-.094-.294-.195q-.145-.101-.284-.209q-.14-.108-.273-.223q-.134-.115-.262-.237q-.127-.121-.249-.249q-.121-.128-.236-.262t-.223-.273t-.209-.284t-.194-.295t-.179-.303q-.086-.155-.164-.313t-.147-.32t-.132-.327q-.061-.165-.114-.334q-.054-.168-.098-.338q-.045-.171-.081-.344t-.063-.346q-.027-.175-.046-.35q-.018-.175-.028-.352q-.009-.176-.01-.352m-2 2l2-2l2 2m8.75 5.5l2 2L21 15.75");
}
</style><path class="r229p86oc"/>`,
		"fallback": "uix-sharp:repost-check",
	});
}

export default Component;
